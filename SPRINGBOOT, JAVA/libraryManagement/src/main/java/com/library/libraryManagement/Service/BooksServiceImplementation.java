package com.library.libraryManagement.Service;

import com.library.libraryManagement.Entity.Books;
import com.library.libraryManagement.Repository.BooksRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;

@Service
public class BooksServiceImplementation implements BooksService {
    @Autowired
    BooksRepository booksRepository;

    @Override
    public ArrayList<Books> findAllBooks() {
        return (ArrayList<Books>) booksRepository.findAll();
    }

//    @Override
//    public Student findAllStudentByID(long id) {
//        Student opt = studentRepository.findById(id);
//        if (opt.isPresent())
//            return opt.get();
//        else
//            return null;
//    }

    @Override
    public void addBooks() {
        List<Books> books = new ArrayList<>();

        Books sample1 = new Books();
        sample1.setName("Half-Girlfriend");
        sample1.setAuthor("Chetan Bhagath");

        Books sample2 = new Books();
        sample2.setName("Five Feets Apart");
        sample2.setAuthor("Christy Penny");

        Books sample3 = new Books();
        sample3.setName("Realm of Emirates");
        sample3.setAuthor("Abraham Giroud");


        books.addAll(Arrays.asList(sample1,sample2,sample3));

        booksRepository.saveAll(books);
    }

    @Override
    public  void deleteAllData() {
        booksRepository.deleteAll();
    }



}