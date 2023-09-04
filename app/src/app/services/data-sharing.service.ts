import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class DataSharingService {
  private dataSubjectAuthorId = new BehaviorSubject<any>(null);

  // Getter để truy cập BehaviorSubject
  private currentData = this.dataSubjectAuthorId.asObservable();

  // Getter để truy cập BehaviorSubject
  getData() {
    return this.currentData;
  }

  // Setter để cập nhật dữ liệu trong BehaviorSubject
  updateData(data: any) {
    this.dataSubjectAuthorId.next(data);
    this.currentData = this.dataSubjectAuthorId.asObservable();
  }
}
