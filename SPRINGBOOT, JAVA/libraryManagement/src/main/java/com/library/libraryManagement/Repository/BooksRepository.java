package com.library.libraryManagement.Repository;

import com.library.libraryManagement.Entity.Books;
import jakarta.persistence.Id;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
@Repository
public interface BooksRepository extends JpaRepository<Books, Long>{
    <Optional>Books findById(long Id);
}