/*package com.example.springtemplate.repositories;

import com.example.springtemplate.models.Type;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface TypeRepository
        extends CrudRepository<Type, Integer> {
    @Query(value = "SELECT * FROM types",
            nativeQuery = true)
    public List<Type> findAllTypes();
    @Query(value = "SELECT * FROM types WHERE id=:typeId",
            nativeQuery = true)
    public Type findTypeById(@Param("typeId") String type);
}*/
