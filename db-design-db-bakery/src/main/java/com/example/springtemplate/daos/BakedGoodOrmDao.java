package com.example.springtemplate.daos;

import com.example.springtemplate.models.BakedGood;
import com.example.springtemplate.repositories.BakedGoodRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class BakedGoodOrmDao {
    @Autowired
    BakedGoodRepository bakedGoodRepository;

    @PostMapping("/api/bakedGoods")
    public BakedGood createBakedGood(@RequestBody BakedGood bakedGood) {
        return bakedGoodRepository.save(bakedGood);
    }

    @GetMapping("/api/bakedGoods")
    public List<BakedGood> findAllBakedGoods() {
        return bakedGoodRepository.findAllBakedGoods();
    }

    @GetMapping("/api/bakedGoods/{bakedGoodId}")
    public BakedGood findBakedGoodById(
            @PathVariable("bakedGoodId") Integer id) {
        return bakedGoodRepository.findBakedGoodById(id);
    }


    @PutMapping("/api/bakedGoods/{bakedGoodId}")
    public BakedGood updateBakedGood(
            @PathVariable("bakedGoodId") Integer id,
            @RequestBody BakedGood bakedGoodUpdates) {
        BakedGood bakedGood = bakedGoodRepository.findBakedGoodById(id);
        bakedGood.setName(bakedGoodUpdates.getName());
        bakedGood.setPrice(bakedGoodUpdates.getPrice());
        bakedGood.setCalories(bakedGoodUpdates.getCalories());
        bakedGood.setType(bakedGoodUpdates.getType());
        bakedGood.setVegan(bakedGoodUpdates.getVegan());
        bakedGood.setGlutenFree(bakedGoodUpdates.getGlutenFree());
        bakedGood.setRecipes(bakedGoodUpdates.getRecipes());
        bakedGood.setCartItems(bakedGoodUpdates.getCartItems());

        return bakedGoodRepository.save(bakedGood);
    }

    @DeleteMapping("/api/bakedGoods/{bakedGoodId}")
    public void deleteBakedGood(
            @PathVariable("bakedGoodId") Integer id) {
        bakedGoodRepository.deleteById(id);
    }
}