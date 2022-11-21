package com.ecohabit.service;

import com.ecohabit.entity.City;

public interface ICityService {

    City get(String postalCode);
}
