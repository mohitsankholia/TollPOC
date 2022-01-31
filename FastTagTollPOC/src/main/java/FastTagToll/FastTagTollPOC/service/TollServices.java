package FastTagToll.FastTagTollPOC.service;

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

}
