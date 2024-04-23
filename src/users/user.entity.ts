import { Exclude } from "class-transformer";
import { AfterInsert, AfterRemove, AfterUpdate, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Report } from "../reports/report.entity";

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({default: true})
    admin: boolean;

    @Column()
    email: string;

    @Column()
    @Exclude()
    password: string;

    @OneToMany(() => Report, (report) => report.user)
    reports: Report[];

    @AfterInsert()
    logInsert() {
        console.log('Inserted user with id ', this.id);
    }

    @AfterUpdate()
    logUpdate() {
        console.log('Updated user with id ', this.id);
    }

    @AfterRemove()
    logRemove() {
        console.log('Deleted user with id ', this.id);
    }
}