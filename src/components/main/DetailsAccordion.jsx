
const DetailsAccordion = ({ details }) => {
  return (
    <div className="my-5 divide-y divide-zinc-300">
        <div className="collapse collapse-arrow rounded">
        <input type="radio" name="my-accordion" />
        <div className="collapse-title">Product Details</div>
        <div className="collapse-content text-sm text-zinc-400">{details}</div>
        </div>
    
        <div className="collapse collapse-arrow rounded">
        <input type="radio" name="my-accordion" />
        <div className="collapse-title">Size & Fit</div>
        <div className="collapse-content text-sm text-zinc-400">
            <p>
            <span className="font-semibold">Fit:</span> Body fit
            </p>
            <p>
            <span className="font-semibold">Models height:</span> Model (Adeola) is 5’10” (179 cm) and wears a size L top & XL bottom
            </p>
        </div>
        </div>
    
        <div className="collapse collapse-arrow rounded">
        <input type="radio" name="my-accordion" />
        <div className="collapse-title">Material & Care</div>
        <div className="collapse-content text-sm text-zinc-400">
            <p>
            <span className="font-semibold">Fabric material:</span> 69% nylon, 31% elastane
            </p>
            <p>
            <span className="font-semibold">Washing instructions:</span> Wash separately at 30ºC. Avoid using softener and hang dry.
            </p>
        </div>
        </div>
    
        <div className="collapse collapse-arrow rounded">
        <input type="radio" name="my-accordion" />
        <div className="collapse-title">Delivery & Returns</div>
        <div className="collapse-content text-sm text-zinc-400">
            <ul className="list-disc ml-5">
            <li>Free Standard Shipping (4-6 Working Days) for orders over € 99</li>
            <li>Easy returns</li>
            </ul>
        </div>
        </div>
    </div>
  )
}

export default DetailsAccordion
