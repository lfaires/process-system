import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import Client from './Client';
import State from './State';

@Entity('process')
export default class Process {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  number: string;

  @Column()
  initials: string;

  @Column()
  createdDate: string;

  @Column()
  stateId: number;

  @Column()
  clientId: number;

  @OneToMany(() => State, state => state.process)
  state: State;

  @OneToMany(() => Client, client => client.state)
  client: Client;
}
