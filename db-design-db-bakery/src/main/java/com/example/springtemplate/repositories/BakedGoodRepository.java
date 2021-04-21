package com.example.springtemplate.repositories;

import com.example.springtemplate.models.BakedGood;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface BakedGoodRepository
        extends CrudRepository<BakedGood, Integer> {
    @Query(value = "SELECT * FROM baked_goods",
            nativeQuery = true)
    public List<BakedGood> findAllBakedGoods();
    @Query(value = "SELECT * FROM baked_goods WHERE id=:bakedGoodId",
            nativeQuery = true)
    public BakedGood findBakedGoodById(@Param("bakedGoodId") Integer id);
}
