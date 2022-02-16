package FastTagToll.FastTagTollPOC.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
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

	@GetMapping("/")
	public List<TollDetails> hogan()
	{
		return service.readEverything();
	}
	
	@GetMapping("/{comp}")
	public TollDetails downey(@PathVariable("comp") String comp)
	{
		return service.readOne(comp);
	}
	
	@DeleteMapping("/remove/{id}")
	public String hemsworth(@PathVariable("id") String id)
	{
		return service.eraseOne(id);
	}
}
