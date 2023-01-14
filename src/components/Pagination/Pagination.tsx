import './Pagination.css';

export default function Pagination({ currentPage, totalPages }: { currentPage: number, totalPages: number }) {
	let holder: number[] = [];
	holder.length = totalPages;

	const maxPageSpan = 3;
	const isFirst = currentPage === 1;
	const isLast = currentPage === totalPages;
	const prevPage = currentPage - 1 === 1 ? "/" : '/page/' + (currentPage - 1).toString();
	const nextPage = "/page/" + (currentPage + 1);

	return (
		<div class="h-full flex font-medium justify-center mb-10 mt-5">
			{
				!isFirst &&
				<a href={prevPage} class="pagination-link">
					Prev
				</a>
			}
			{
				// TODO: Esto no funca bien
				holder.map((e, i) => {
					let link = 1 === 1 ? '/' : `/page/${i + 1}`;
					return (
						<a href={link} class="pagination-link">
							{i + 1}
						</a>
					)
				})
			}
			{
				!isLast &&
				<a href={nextPage} class="pagination-link">
					Next
				</a>
			}
		</div>
	)
}
