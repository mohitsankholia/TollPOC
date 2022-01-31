package FastTagToll.FastTagTollPOC.entity;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity 
public class TollDetails {
	
	@Id
	private String vehicleNo;
	
	private String ownername, vendor;
	
	private Integer id, balance, transaction;
	
	public String getVehicleNo() {
		return vehicleNo;
	}
	public void setVehicleNo(String vehicleNo) {
		this.vehicleNo = vehicleNo;
	}
	public String getOwnername() {
		return ownername;
	}
	public void setOwnername(String ownername) {
		this.ownername = ownername;
	}
	public String getVendor() {
		return vendor;
	}
	public void setVendor(String vendor) {
		this.vendor = vendor;
	}
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public Integer getBalance() {
		return balance;
	}
	public void setBalance(Integer balance) {
		this.balance = balance;
	}
	public Integer getTransaction() {
		return transaction;
	}
	public void setTransaction(Integer transaction) {
		this.transaction = transaction;
	}

}
