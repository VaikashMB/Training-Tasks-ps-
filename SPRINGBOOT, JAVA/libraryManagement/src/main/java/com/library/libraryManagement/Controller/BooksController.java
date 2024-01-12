package com.library.libraryManagement.Controller;
import com.library.libraryManagement.Entity.Books;
import com.library.libraryManagement.Service.BooksServiceImplementation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import javax.sql.DataSource;
import java.sql.Connection;
import java.sql.SQLException;
import java.util.ArrayList;
@RestController
@RequestMapping("/books")
public class BooksController {
    @Autowired
    BooksServiceImplementation booksServiceImplementation;
    @PostMapping("/add")
    public ResponseEntity<String> addBooks(){
        booksServiceImplementation.addBooks();
        return ResponseEntity.ok("Insertion done");
    }
    @GetMapping("/get")
    public ArrayList<Books> getAllBooks() {
        return booksServiceImplementation.findAllBooks();
    }
    //    @GetMapping("/findbyid/{id}")
//    public Student getStudentUsingId(@PathVariable long id) {
//        return studentServiceImplementation.findAllStudentByID(id);
//    }
    @DeleteMapping("/delete")
    public void delete(){
        booksServiceImplementation.deleteAllData();
    }
}

@RestController
@RequestMapping("/status")
class DatabaseCheckController {
    @Autowired
    private DataSource dataSource;
    @GetMapping("/check")
    public ResponseEntity<String> checkDatabaseConnection() {
        try (Connection connection = dataSource.getConnection()) {
            return ResponseEntity.ok("Database connection is successful");
        } catch (SQLException e) {
            return ResponseEntity.status(500).body("Error connecting to the database");
        }
    }
}