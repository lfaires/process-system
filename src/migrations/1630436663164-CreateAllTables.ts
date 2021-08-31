import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateAllTables1630436663164 implements MigrationInterface {
    name = 'CreateAllTables1630436663164'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "initials" ("id" SERIAL NOT NULL, "name" character varying(10) NOT NULL, CONSTRAINT "PK_5cfc4caf23f951718a8a2fd75e9" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "states" ("id" SERIAL NOT NULL, "name" character varying(2) NOT NULL, CONSTRAINT "PK_09ab30ca0975c02656483265f4f" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "process" ("id" SERIAL NOT NULL, "number" character varying(5) NOT NULL, "createdDate" TIMESTAMP NOT NULL DEFAULT now(), "initialId" integer NOT NULL, "stateId" integer NOT NULL, "clientId" integer NOT NULL, CONSTRAINT "PK_d5e3ab0f6df55ee74ca24967952" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "clients" ("id" SERIAL NOT NULL, "name" character varying(100) NOT NULL, "cnpj" character varying(14) NOT NULL, "stateId" integer NOT NULL, CONSTRAINT "PK_f1ab7cf3a5714dbc6bb4e1c28a4" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "process" ADD CONSTRAINT "FK_164f3b82600d28540eda84047fb" FOREIGN KEY ("initialId") REFERENCES "initials"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "process" ADD CONSTRAINT "FK_9c86f508f85ce671b44d0b6aa97" FOREIGN KEY ("stateId") REFERENCES "states"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "process" ADD CONSTRAINT "FK_0ba5617070847f1e4986f5c23c6" FOREIGN KEY ("clientId") REFERENCES "clients"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "clients" ADD CONSTRAINT "FK_c1276f66fbe27e9fc3bf9e1d81b" FOREIGN KEY ("stateId") REFERENCES "states"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "clients" DROP CONSTRAINT "FK_c1276f66fbe27e9fc3bf9e1d81b"`);
        await queryRunner.query(`ALTER TABLE "process" DROP CONSTRAINT "FK_0ba5617070847f1e4986f5c23c6"`);
        await queryRunner.query(`ALTER TABLE "process" DROP CONSTRAINT "FK_9c86f508f85ce671b44d0b6aa97"`);
        await queryRunner.query(`ALTER TABLE "process" DROP CONSTRAINT "FK_164f3b82600d28540eda84047fb"`);
        await queryRunner.query(`DROP TABLE "clients"`);
        await queryRunner.query(`DROP TABLE "process"`);
        await queryRunner.query(`DROP TABLE "states"`);
        await queryRunner.query(`DROP TABLE "initials"`);
    }

}
