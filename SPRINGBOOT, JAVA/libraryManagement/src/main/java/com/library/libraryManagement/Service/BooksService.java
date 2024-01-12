package com.library.libraryManagement.Service;

import com.library.libraryManagement.Entity.Books;

import java.util.ArrayList;

public interface BooksService {
    ArrayList<Books> findAllBooks();
//    Books findAllBooksByID(long id);
    void addBooks();
    void deleteAllData();
}
