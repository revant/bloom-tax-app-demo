import { Entity, BaseEntity, Column, PrimaryGeneratedColumn } from 'typeorm';
import * as uuidv4 from 'uuid/v4';

@Entity()
export class TokenCache extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  accessToken: string;
  @Column()
  uuid: string;
  @Column()
  active: boolean;
  @Column()
  exp: number;
  @Column()
  sub: string;
  @Column()
  scope: string;
  @Column()
  roles: string;
  @Column()
  clientId: string;
  constructor() {
    super();
    if (!this.uuid) {
      this.uuid = uuidv4();
    }
  }
}
