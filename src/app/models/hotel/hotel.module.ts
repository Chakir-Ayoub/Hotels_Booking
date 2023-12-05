import { Room } from "src/app/models/rooms/rooms.module";
import { Location } from "../location/location.module";

export class Hotel {
  location: Location;
  _id: string;
  name: string;
  photos: string[];
  title: string;
  desc: string;
  numOfReviews: number;
  featured: boolean;
  user: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
  rooms: Room[];
}
