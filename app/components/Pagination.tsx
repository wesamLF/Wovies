
import Link from "next/link";

const Pagination = ({ total_pages, currentPage, toPage }: { total_pages: number, currentPage: string, toPage: string }) => {


    const temp: number = Number(currentPage)
    let currentPageNumber: number = Number.isNaN(temp) ? 1 : temp
    total_pages = (total_pages >= 500) ? 499 : total_pages // max pages in tmdp is 500, 499 to be safe NO! make it 488 i mean 498 math is hard

    currentPageNumber = currentPageNumber >= total_pages ? total_pages : currentPageNumber // in case the user type in the search url number over 500 /.../...?page=9999

    let steps = []



    // i am sorry...
    if (total_pages == 1) {// only one page
        steps = [currentPageNumber]
    } else if (total_pages == 2) { // case page 2 and total is only 2 pages
        steps = [total_pages - 1, total_pages]
    } else if (total_pages == 3) {
        steps = [1, total_pages - 1, total_pages]
    }
    else if (currentPageNumber == 1) {
        steps = [currentPageNumber, currentPageNumber + 1, currentPageNumber + 2, currentPageNumber + 3, total_pages]

    } else if (currentPageNumber == total_pages) { // last page
        steps = [1, 2, currentPageNumber - 2, currentPageNumber - 1, total_pages]

    } else if (currentPageNumber == 2 && total_pages > 2) { // page 2 but the total has to be over than 2 pages
        steps = [currentPageNumber - 1, currentPageNumber, currentPageNumber + 1, currentPageNumber + 2, total_pages]

    } else if (currentPageNumber == total_pages - 1) {
        steps = [1, 2, currentPageNumber - 1, currentPageNumber, total_pages]

    } else {

        steps = [1, currentPageNumber - 1, currentPageNumber, currentPageNumber + 1, total_pages]
    }




    return (
        <div>
            <div className="join ">


                {steps.map((step) => (
                    step == currentPageNumber
                        ? <Link key={step} href={`${toPage}${step.toString()}`}>
                            <button className="join-item btn btn-lg btn-active">{currentPageNumber}</button>
                        </Link>
                        : <Link key={step} href={`${toPage}${step.toString()}`}>
                            <button className="join-item btn btn-lg">{step}</button>
                        </Link>


                ))
                }

            </div >
        </div >
    )
}

export default Pagination