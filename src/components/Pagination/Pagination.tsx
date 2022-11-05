import { h, Fragment } from 'preact';
import './Pagination.css';

export default function Pagination({ currentPage, totalPages }: { currentPage: number, totalPages: number }) {
	let holder: number[] = [];
	holder.length = totalPages;

	const prevPage = currentPage - 1 === 1 ? "/" : '/page/' + (currentPage - 1).toString();
	const nextPage = "/page/" + (currentPage + 1);
	
	return (
		<div class="h-full flex font-medium justify-center mb-10 mt-5">
			{
				currentPage !== 1 ?
					<a href={prevPage} class="pagination-link">
						Prev
					</a>
					:
					''
			}
			{
				holder.map((e, i) => {
					console.log('lel');
					return (
						<li>{i + 1}</li>
					)
				})
			}
			{
				currentPage !== totalPages ?
					<a href={nextPage} class="pagination-link">
						Next
					</a>
					:
					''
			}
		</div>
	)
}
