package FastTagToll.FastTagTollPOC.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import FastTagToll.FastTagTollPOC.entity.TollDetails;

@Repository 
public interface TollRepository extends JpaRepository<TollDetails, String>{

}
