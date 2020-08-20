package com.delta.studentProject.models;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Entity;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Adress extends BaseEntity {

    private String street;

    private String cep;

    private String number;

    private String complement;


}
