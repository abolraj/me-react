import { SearchIcon, X } from "lucide-react";
import { useState } from "react"
import { useTranslation } from "react-i18next";

export default function Search({
    onSearch = null,
    className = '',
    ...props
}) {
    const { t } = useTranslation()
    const [query, setQuery] = useState('')

    const handleOnSearch = (e) => {
        const text = e.target.value
        handleOnQueryChange(text)
    }

    const handleOnQueryChange = (query) => {
        setQuery(query)
        onSearch && onSearch(query)
    }

    return (
        <label class={`input input-bordered bg-inherit border-base-100 rounded-full pe-0  overflow-hidden flex flex-wrap items-center gap-2 text-base-content ${className}`} {...props}>
            <SearchIcon className='size-6' />
            <input type="text" name="q" class="grow" placeholder={t('common.search')} onChange={handleOnSearch} value={query} />
            {query && (
                <button onClick={() => handleOnQueryChange('')} className="btn btn-ghost !border-none rounded-l-none focus-within:outline-none p-0 pe-1 m-0 aspect-square">
                    <X className="size-6" />
                </button>
            )}
        </label>
    )
}