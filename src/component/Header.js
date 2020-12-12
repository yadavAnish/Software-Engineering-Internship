
import React from 'react';

export default function Header(props) {
  return (
    <header>
      <div className="headings">
        <h1>NEW YORK TIMES BESTSELLERS</h1>
        <h3>(and whether Goodreads readers actually like them)</h3>
      </div>
      <select onChange={props.select}>
        <option value="">SELECT LIST</option>
        <option value="combined-print-and-e-book-fiction">Combined Print & E-Book Fiction</option>
        <option value="hardcover-fiction">Hardcover Fiction</option>
        <option value="trade-fiction-paperback">Paperback Trade Fiction</option>
        <option value="combined-print-and-e-book-nonfiction">Combined Print & E-Book Nonfiction</option>
        <option value="hardcover-nonfiction">Hardcover Nonfiction</option>
        <option value="paperback-nonfiction">Paperback Nonfiction</option>
        <option value="advice-how-to-and-miscellaneous">Nonfiction: Advice, How-To, & Miscellaneous</option>
        <option value="childrens-middle-grade-hardcover">Children's Middle Grade Hardcover</option>
        <option value="picture-books">Children's Picture Books</option>
        <option value="series-books">Children's Series</option>
        <option value="young-adult-hardcover">Young Adult Hardcover</option>
        <option value="audio-fiction">Monthly: Audio Fiction</option>
        <option value="audio-nonfiction">Monthly: Audio Nonfiction</option>
        <option value="business-books">Monthly: Business</option>
        <option value="science">Monthly: Science</option>
        <option value="sports">Monthly: Sports & Fitness</option>
      </select>
    </header>
  )
}
