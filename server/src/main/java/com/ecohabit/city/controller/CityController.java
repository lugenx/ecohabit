package com.ecohabit.city.controller;

import com.ecohabit.city.entity.City;
import com.ecohabit.city.service.ICityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.graphql.data.method.annotation.Argument;
import org.springframework.graphql.data.method.annotation.QueryMapping;
import org.springframework.graphql.data.method.annotation.SchemaMapping;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@CrossOrigin
public class CityController {

    @Autowired
    private ICityService cityService;

    @QueryMapping
    public City cityByPostalCode(@Argument String postalCode) {
        return cityService.get(postalCode);
    }


}
