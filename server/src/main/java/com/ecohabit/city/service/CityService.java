package com.ecohabit.city.service;

import com.ecohabit.city.entity.City;
import org.springframework.stereotype.Service;

@Service
public class CityService implements ICityService {
    @Override
    public City get(String postalCode) {
        return City.testCities().stream().filter(c -> c.getPostalCode().equals(postalCode)).findFirst().orElse(null);
    }
}
