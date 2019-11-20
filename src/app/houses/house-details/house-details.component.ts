import { Component, OnInit } from '@angular/core';
import { House } from '../House';
import { ActivatedRoute } from '@angular/router';
import { HousesService } from '../houses.service';
import { CharactersService } from '../../characters/characters.service';
import { Character } from 'src/app/characters/Character';

@Component({
  templateUrl: './house-details.component.html',
  styleUrls: ['./house-details.component.scss'],
})
export class HouseDetailsComponent implements OnInit {
  public characters!: Character[];
  public house!: House;
  public constructor(private route: ActivatedRoute, private housesService: HousesService,private charactersService: CharactersService) {}

  public ngOnInit(): void {
    const { id } = this.route.snapshot.params;
    this.housesService.getHouse(id).subscribe((house)=> {
      this.house = house
    });
    this.charactersService.listHouseCharacters(id).subscribe((characters)=>{
      this.characters = characters
    });
    
  }
}
