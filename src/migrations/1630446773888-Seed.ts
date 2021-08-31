import {MigrationInterface, QueryRunner} from "typeorm";

export class Seed1630446773888 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`INSERT INTO "states" (name, initial) VALUES ('Acre', 'AC'),('Alagoas', 'AL'), ('Amapá', 'AP'), ('Amazonas', 'AM'), ('Bahia', 'BA'), ('Ceará', 'CE'), ('Distrito Federal', 'DF'), ('Espírito Santo', 'ES'), ('Goiás', 'GO'), ('Maranhão', 'MA'), ('Mato Grosso', 'MT'), ('Mato Grosso do Sul', 'MS'), ('Minas Gerais', 'MG'), ('Pará', 'PA'), ('Paraíba', 'PB'), ('Paraná', 'PR'), ('Pernambuco', 'PE'), ('Piauí', 'PI'), ('Rio de Janeiro', 'RJ'), ('Rio Grande do Norte', 'RN'), ('Rio Grande do Sul', 'RS'), ('Rondônia', 'RO'),('Roraima', 'RR'), ('Santa Catarina', 'SC'), ('São Paulo', 'SP'), ('Sergipe', 'SE'), ('Tocantins', 'TO')`);
        await queryRunner.query(`INSERT INTO "initials" (name) VALUES ('TRAB'), ('CIVEL')`);
        await queryRunner.query(`INSERT INTO "clients" (name, cnpj, "stateId") VALUES ('Empresa A', '00000000000001', 19), ('Empresa B', '00000000000002', 25)`);
        await queryRunner.query(`INSERT INTO process (number, "createdDate", status, value, "initialId", "clientId", "stateId") VALUES ('00001','10/10/2017',true,20000000,2,1,19), ('00002','20/10/2007',true,10000000, 2, 1, 25), ('00003','30/10/2007', false, 1000000, 1, 1, 13), ('00004', '10/11/2007', false, 2000000, 2, 1, 19), ('00005', '15/11/2007', true, 3500000, 2, 1, 25), ('00006', '01/05/2007', true, 2000000, 2, 2, 19), ('00007', '02/06/2007', true, 70000000, 2, 2, 19), ('00008', '03/07/2007', false, 50000, 2, 2, 25), ('00009', '04/08/2007', true, 3200000, 2, 2, 25), ('00010', '05/09/2007', false, 100000, 1, 2, 4)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DELETE FROM "clients"`);
        await queryRunner.query(`DELETE FROM "process"`);
        await queryRunner.query(`DELETE FROM "states"`);
        await queryRunner.query(`DELETE FROM "initials"`);
    }

}
