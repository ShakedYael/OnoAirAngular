import { Injectable } from '@angular/core';
import { Destination } from '../model/destination.model';

@Injectable({
  providedIn: 'root'
})
export class DestinationService {
  private destinations: Destination[] = [
    new Destination('TLV', 'Tel Aviv', 'Ben Gurion Airport', 'https://www.iaa.gov.il/en/', 'https://media.timeout.com/images/105434111/image.jpg'),
    new Destination('JFK', 'New York', 'John F. Kennedy International Airport', 'https://www.jfkairport.com/', 'https://upload.wikimedia.org/wikipedia/commons/0/05/View_of_Empire_State_Building_from_Rockefeller_Center_New_York_City_dllu.jpg'),
    new Destination('LHR', 'London', 'Heathrow Airport', 'https://www.heathrow.com/', 'https://cms.inspirato.com/ImageGen.ashx?image=%2Fmedia%2F5682444%2FLondon_Dest_16531610X.jpg&width=1081.5'),
    new Destination('DXB', 'Dubai', 'Dubai International Airport', 'https://www.dubaiairports.ae/', 'https://granitas.az/wp-content/uploads/2021/01/dubay-3-1024x683.jpg'),
    new Destination('CDG', 'Paris', 'Charles de Gaulle Airport', 'https://www.parisaeroport.fr/', 'https://149990825.v2.pressablecdn.com/wp-content/uploads/2023/09/Paris1.jpg'),
    new Destination('HND', 'Tokyo', 'Haneda Airport', 'https://www.haneda-airport.jp/', 'https://images.goway.com/production/featured_images/japan_tokyo_akihabara_AdobeStock_295310062_Editorial_Use_Only.jpg'),
    new Destination('SYD', 'Sydney', 'Sydney Kingsford Smith Airport', 'https://www.sydneyairport.com.au/', 'https://cdn.britannica.com/71/188471-050-CF188A6B/Sydney-Opera-House-Port-Jackson.jpg'),
    new Destination('FRA', 'Frankfurt', 'Frankfurt Airport', 'https://www.frankfurt-airport.com/', 'https://www.deutschland.de/sites/default/files/media/image/tdt_04072023_tourismus_frankfurt_skyline.jpg'),
    new Destination('PEK', 'Beijing', 'Beijing Capital International Airport', 'https://en.bcia.com.cn/', 'https://english.beijing.gov.cn/beijinginfo/culture/culturaltreasures/sevenculture/202401/W020240111414635102170.png'),
    new Destination('MIA', 'Miami', 'Miami International Airport', 'https://www.miami-airport.com/', 'https://a.eu.mktgcdn.com/f/100004519/AGs-7NCvKQVFaEBlWyQ7SptVv7O9t-WcxGWdtu0uwM8.jpg')
  ];

  list(): Destination[] {
    return this.destinations;
  }
}
