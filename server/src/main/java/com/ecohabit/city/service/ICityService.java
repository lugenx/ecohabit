package com.ecohabit.city.service;

import com.ecohabit.city.entity.City;

public interface ICityService {

    City get(String postalCode);
}
