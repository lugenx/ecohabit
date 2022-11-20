package com.ecohabit.controller;

import com.ecohabit.entity.City;
import com.ecohabit.service.ICityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.graphql.data.method.annotation.Argument;
import org.springframework.graphql.data.method.annotation.QueryMapping;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
public class CityController {

    @Autowired
    private ICityService cityService;

    @GetMapping("/public/city/{postalCode}")
    public City get(@PathVariable String postalCode) {
        return cityService.get(postalCode);
    }



}
