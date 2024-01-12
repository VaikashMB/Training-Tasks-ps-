package com.Task.WelcomeDeck.Entity;
import jakarta.persistence.Entity;
import javax.persistence.Column;

import javax.persistence.*;
@Entity

public class new_table {
    @Id
    private Long id;



    @Column(name = "name")
    private String name;

    @Column(name = "designation")
    private String designation;

    @Column(name = "hometown")
    private String hometown;

    @Column(name = "qualification")
    private String qualification;

    @Column(name = "experience")
    private int experience;

    @Column(name = "coreskills")
    private String coreskills;

    @Column(name = "ibu")
    private String ibu;

    @Column(name = "manager")
    private String manager;

    @Column(name = "contact_details")
    private String contactDetails;



    public new_table() {
    }


    public new_table(String name, String designation, String hometown, String qualification,
                              int experience, String coreskills, String ibu, String manager, String contactDetails) {
        this.name = name;
        this.designation = designation;
        this.hometown = hometown;
        this.qualification = qualification;
        this.experience = experience;
        this.coreskills = coreskills;
        this.ibu = ibu;
        this.manager = manager;
        this.contactDetails = contactDetails;
    }


}

}
