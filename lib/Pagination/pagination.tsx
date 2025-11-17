import { Button } from '../Button/Button';
import { cn } from '../lib/utils';
import { PaginationProps } from './types';


const Pagination = ({ currentPage, setCurrentPage, totalPages, className }: PaginationProps) => {
  const isFirstPage = currentPage === 0;
  const isLastPage = currentPage === totalPages || currentPage >= totalPages;


  const handlePrevious = () => {
    if (isFirstPage) {
      return;
    }
    setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (isLastPage) {
      return;
    }

    setCurrentPage(currentPage + 1);
  }

  return (
    <div className={cn("flex gap-2", className)}>
      <Button
        className={cn(isFirstPage && "cursor-not-allowed")}
        variant="outline"
        disabled={isFirstPage}
        onClick={handlePrevious}
      >
        Previous
      </Button>
      <Button
        className={cn(isLastPage && "cursor-not-allowed")}
        disabled={isLastPage}
        onClick={handleNext}
      >
        Next
      </Button>
    </div>
  )
}

export {
  Pagination
}
