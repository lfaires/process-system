import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import Client from './Client';
import Process from './Process';

@Entity('states')
export default class State {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 50 })
  name: string;

  @Column({ length: 2 })
  initial: string;

  @OneToMany(() => Client, client => client.state)
  client: Client[];

  @OneToMany(() => Process, process => process.state)
  process: Process[];
}
