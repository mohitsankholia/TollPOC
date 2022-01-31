package FastTagToll.FastTagTollPOC.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import FastTagToll.FastTagTollPOC.entity.TollDetails;
import FastTagToll.FastTagTollPOC.service.TollServices;

@RestController
@RequestMapping("/toll")
@CrossOrigin(origins = "http://localhost:3000")

public class TollController {
	
	@Autowired
	TollServices service;
	
	@PostMapping("/new")
	public String entry(@RequestBody TollDetails Toll) {
		
		return service.display(Toll)+ " has successfully inserted";
	}

}
