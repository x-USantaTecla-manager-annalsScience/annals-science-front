import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialog, MatDialogRef, MatDialogModule } from '@angular/material/dialog';

import { EditDetailModalComponent } from './edit-detail-modal.component';

describe('EditDetailModalComponent', () => {
  let component: EditDetailModalComponent;
  let fixture: ComponentFixture<EditDetailModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditDetailModalComponent ],
      imports: [
        MatDialog,
        MatDialogRef,
        MatDialogModule
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditDetailModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
