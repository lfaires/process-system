import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import Client from './Client';
import Process from './Process';

@Entity('states')
export default class State {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToOne(() => Client, client => client.state)
  client: Client;

  @ManyToOne(() => Process, process => process.state)
  process: Process;
}
