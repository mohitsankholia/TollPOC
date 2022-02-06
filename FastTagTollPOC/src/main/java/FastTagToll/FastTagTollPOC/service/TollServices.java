package FastTagToll.FastTagTollPOC.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import FastTagToll.FastTagTollPOC.entity.TollDetails;
import FastTagToll.FastTagTollPOC.repository.TollRepository;

@Service
public class TollServices {
	
	@Autowired
	TollRepository repo;
	
	public TollDetails display(TollDetails object) {
		return repo.save(object); 
		
	}
	
	public List<TollDetails> readEverything()
	{
		return repo.findAll();
	}
	
	public TollDetails readOne(String id)
	{
		return repo.findById(id).orElse(new TollDetails());
	}

}
