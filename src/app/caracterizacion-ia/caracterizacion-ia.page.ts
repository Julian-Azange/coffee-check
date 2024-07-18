import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../services/photo.service';
import { ActionSheetController, ModalController } from '@ionic/angular';
import { Photo } from '../models/photo.interface';

import * as tmImage from '@teachablemachine/image';
import * as tf from '@tensorflow/tfjs';
import { Router } from '@angular/router';

interface Prediction {
  className: string;
  probability: number;
}

@Component({
  selector: 'app-caracterizacion-ia',
  templateUrl: './caracterizacion-ia.page.html',
  styleUrls: ['./caracterizacion-ia.page.scss'],
})
export class CaracterizacionIaPage implements OnInit {

  public photos: Photo[] = [];
  public isModalOpen: boolean = false;
  public prediction: Prediction | null = null;
  private model: any;
  private maxPredictions: number = 0;

  constructor(
    public photoService: PhotoService,
    public actionSheetController: ActionSheetController,
    public modalController: ModalController,
    private router: Router
  ) { }

  goBack(){
    this.router.navigate(['/menu']);
  }

  async ngOnInit() {
    await this.photoService.loadSaved();
    this.photos = this.photoService.photos;

    const modelURL = '../../assets/modelos/model.json';
    const metadataURL = '../../assets/modelos/metadata.json';

    this.model = await tmImage.load(modelURL, metadataURL);
    this.maxPredictions = this.model.getTotalClasses();
  }

  async addPhotoToGallery() {
    await this.photoService.addNewToGallery();
    await this.predictPhoto(this.photos[0]);
  }

  async predictPhoto(photo: Photo) {
    const image = new Image();
    const loadImage = new Promise<void>((resolve, reject) => {
      image.onload = () => resolve();
      image.onerror = (e) => reject(e);
    });

    image.src = photo.webViewPath;

    try {
      await loadImage;
      const predictions: Prediction[] = await this.model.predict(image);

      const highestPrediction = predictions.reduce((prev: Prediction, current: Prediction) => (prev.probability > current.probability) ? prev : current);
      this.prediction = highestPrediction;
      this.isModalOpen = true;
    } catch (error) {
      console.error('Error loading image or making prediction:', error);
    }
  }

  closeModal() {
    this.isModalOpen = false;
  }

  public newPhoto(): void {
    this.photoService.addNewToGallery();
  }

  async startPrediction() {
    if (this.photos.length > 0) {
      const lastPhoto = this.photos[0];
      await this.predictPhoto(lastPhoto);
    }
  }
}
