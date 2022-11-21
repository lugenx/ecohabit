package com.ecohabit.Entities;

import lombok.Data;

@Data
public class CityEntity {
    private String postalCode;
    private String city;
    private String province;
    private String metro;
    private String region;
    private double longitude;
    private double latitude;
    private int population;
}
