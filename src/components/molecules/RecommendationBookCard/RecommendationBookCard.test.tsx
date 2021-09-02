
import { render,screen, cleanup } from '@testing-library/react'
import RecommendationBookCard from './RecommendationBookCard'

afterEach(cleanup)

describe('RecooemdationBookCard Testing', () => {

    it('Checking The title', () => {
        render(<RecommendationBookCard title="Nature Chemistry"
        authorName="J D Lee"
        image="https://cdn.zeplin.io/5f03041d8c8fc11335546618/assets/920F4926-3BD5-47FB-A32A-32C03DE1BB71.png" />)
    
    expect(screen.getByText('Nature Chemistry')).toBeInTheDocument();
    expect(screen.getByText('J D Lee')).toBeInTheDocument();
    expect(screen.getByText('Nature chemistry deals with different biocatalytic approaches to transform phenols by adding different neurons')).toBeInTheDocument();
    })

})