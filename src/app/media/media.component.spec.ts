import { media } from './media.component';

describe('media', () =>{
    it('Should return 550.6 if the array of numbers is 160,591,114,229,230,270,128,1657,624,1503',()=>{
        const result = media ([160,591,114,229,230,270,128,1657,624,1503]);
        expect(result).toBe(550.6);
    })
    it('Should return 60.3 if the array of numbers is 15,69.9,6.5,22.4,28.4,65.9,19.4,198.7,38.8,138.2',()=>{
        const result = media ([15,69.9,6.5,22.4,28.4,65.9,19.4,198.7,38.8,138.2]);
        expect(result).toBe(60.32000000000001);
    })
})