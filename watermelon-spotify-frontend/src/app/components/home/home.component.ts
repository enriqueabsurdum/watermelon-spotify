import {Component, OnInit} from '@angular/core';
import {AlbumService} from '../../services/album.service';
import {Album} from '../../interfaces/album';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  albumForm: FormGroup;
  flag: boolean;
  private albums: Album[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private albumService: AlbumService
  ) {
    this.albumForm = this.createAlbumForm();
  }

  ngOnInit() {
  }

  private createAlbumForm() {
    return this.formBuilder.group({
      albumName: ['', Validators.required],
    });
  }

  public searchAlbum(): void {
    this.flag = false;
    this.albumService.getAlbum(this.albumForm.value.albumName)
      .subscribe((res: object) => {
        this.albums = res.data;
        console.log(this.albums);
        if (this.albums <= 0) {
          this.flag = true;
        }
      }, (err: Error) => {
        console.error(err);
      });
  }
}
