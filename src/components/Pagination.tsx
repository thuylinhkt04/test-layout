import { useState, useEffect } from 'react'
import ReactPaginate from 'react-paginate'
import { PAGING_LIMIT } from '../constans'

const Pagination = ({itemsPerPage = PAGING_LIMIT, items, onPageChange} : {
  itemsPerPage?: number
  items: Array<any>
  onPageChange: (itemsOnPage: Array<any>) => void
}) => {
  const [totalItem, setTotalItem] = useState(0);
  const [pageCount, setPageCount] = useState(0);

  useEffect(() => {
    setTotalItem(items.length)
  }, [items])

  useEffect(() => {
    getItemsOnPage(0)
  }, [totalItem])

  useEffect(() => {
    setPageCount(Math.ceil(items.length / itemsPerPage));
  }, [itemsPerPage, items])

  const getItemsOnPage = (currentPage: number) => {
    const startOffset = currentPage * PAGING_LIMIT % totalItem
    const endOffset = startOffset + PAGING_LIMIT;
    const itemsOnPage = items.slice(startOffset, endOffset)
    onPageChange(itemsOnPage)
    window.scrollTo(0, 0)
  }

  return (
    <ReactPaginate
      nextLabel={<span className='icon-angle-right text-xs'></span>}
      previousLabel={<span className='icon-angle-left text-xs'></span>}
      onPageChange={({selected}) => getItemsOnPage(selected)}
      pageRangeDisplayed={3}
      marginPagesDisplayed={2}
      pageCount={pageCount}
      pageClassName="page-item"
      previousClassName="page-item"
      nextClassName="page-item"
      breakLabel="..."
      breakClassName="page-item"
      containerClassName="pagination"
      activeClassName="active"
      renderOnZeroPageCount={null}
    />
  )
}

export default Pagination;