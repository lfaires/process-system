import {
  Column,
  Entity,
  OneToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import Process from './Process';
import State from './State';

@Entity('clients')
export default class Client {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  name: string;

  @Column({ length: 14 })
  cnpj: string;

  @Column()
  stateId: number;

  @ManyToOne(() => State, state => state.client)
  state: State;

  @OneToMany(() => Process, process => process.client)
  process: Process[];
}
