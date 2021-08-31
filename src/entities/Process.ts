import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import Client from './Client';
import Initial from './Initial';
import State from './State';

@Entity('process')
export default class Process {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 5 })
  number: string;

  @CreateDateColumn({ type: 'timestamp' })
  createdDate: Date;

  @Column({ default: true })
  status: boolean;

  @Column()
  initialId: number;

  @Column()
  stateId: number;

  @Column()
  clientId: number;

  @ManyToOne(() => Initial, initial => initial.process)
  initial: Initial;

  @ManyToOne(() => State, state => state.process)
  state: State;

  @ManyToOne(() => Client, client => client.process)
  client: Client;

  name() {
    return this.number + this.initial + this.state;
  }
}
