import { Injectable } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { Filesystem, Directory, WriteFileResult } from '@capacitor/filesystem';
import { Storage } from '@capacitor/storage';
import { Photo } from '../models/photo.interface';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  public photos: Photo[] = [];
  private PHOTO_STORAGE: string = 'photos';

  constructor() { }

  public async addNewToGallery(): Promise<void> {
    // Tomar una foto
    const capturedPhoto = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100
    });

    const savedImageFile = await this.savePicture(capturedPhoto);
    this.photos.unshift(savedImageFile);

    await Storage.set({
      key: this.PHOTO_STORAGE,
      value: JSON.stringify(this.photos),
    });
  }

  public async savePicture(photo: any): Promise<Photo> {
    const base64Data = await this.readAsBase64(photo);
    const fileName = new Date().getTime() + '.jpeg';
    const savedFile: WriteFileResult = await Filesystem.writeFile({
      path: fileName,
      data: base64Data,
      directory: Directory.Data
    });

    return {
      webPath: fileName,
      filePath: savedFile.uri,
      webViewPath: photo.webPath,
    };
  }

  public async loadSaved(): Promise<void> {
    const photoList = await Storage.get({ key: this.PHOTO_STORAGE });
    
    // Verificar si photoList.value no es null antes de parsearlo
    if (photoList.value !== null) {
      this.photos = JSON.parse(photoList.value) || [];
    } else {
      this.photos = [];
    }
  }

  private async readAsBase64(photo: any): Promise<string> {
    const response = await fetch(photo.webPath);
    const blob = await response.blob();
    return await this.convertBlobToBase64(blob) as string;
  }

  private convertBlobToBase64 = (blob: Blob) => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = reject;
    reader.onload = () => {
      resolve(reader.result as string);
    };
    reader.readAsDataURL(blob);
  });

}
