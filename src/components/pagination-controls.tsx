import { Button } from './ui/button';

type PaginationControlsProps = {
  prevPage: () => void;
  nextPage: () => void;
  currentPage: number;
  totalPages: number;
};

export function PaginationControls({ prevPage, nextPage, currentPage, totalPages }: PaginationControlsProps) {
  return (
    <div className="flex justify-center gap-x-10 w-full mt-5">
      <Button variant="obolPrimary" className="py-3 px-6" onClick={prevPage} disabled={currentPage == 1}>
        Previous
      </Button>
      <Button variant="obolPrimary" className="py-3 px-6" onClick={nextPage} disabled={currentPage == totalPages}>
        Next
      </Button>
    </div>
  );
}
