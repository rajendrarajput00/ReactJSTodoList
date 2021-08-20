import React, { lazy, Suspense } from 'react'
const Calculator = lazy(()=>import('../Calculator/index'))
const LazyContent = lazy(()=>import('../LazyLoading/LazyContent'))


export default function index() {
    return (
        <div>
            {/* <Suspense fallback={<div>loading......</div>}>
                <Calculator></Calculator>
            </Suspense> */}
            <Suspense fallback={<div>loading......</div>}>
                <LazyContent></LazyContent>
            </Suspense>
        </div>
    )
}
