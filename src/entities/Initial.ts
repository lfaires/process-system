import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import Process from './Process';

@Entity('initials')
export default class Initial {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 10 })
  name: string;

  @OneToMany(() => Process, process => process.initial)
  process: Process[];
}
