import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import State from './State';

@Entity('clients')
export default class Client {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar')
  cnpj: string;

  @Column()
  stateId: number;

  @OneToMany(() => State, state => state.client)
  state: State;
}
