import React from "react";
import styled from "styled-components";
import { Book } from "../../models/book.model";
import { getImgSrc } from "../../utills/image";
import { formatNumber } from "../../utills/format";
import { FaHeart } from "react-icons/fa";

interface Props {
  book: Book;
}

const BookItem = ({book} : Props) => {
  return (
    <BookItemStyle>
      <div className="img">
        <img src={getImgSrc(book.id)} alt={book.title} />
      </div>
      <div className="contents">
        <h2 className="title">{book.title}</h2>
        <p className="summary">{book.summary}</p>
        <p className="author">{book.author}</p>
        <p className="price">{formatNumber(book.price)}원</p>
        <div className="likes"><FaHeart /><span>{book.likes}</span></div>
      </div>
    </BookItemStyle>
  );
};

const BookItemStyle = styled.div``;

export default BookItem;
