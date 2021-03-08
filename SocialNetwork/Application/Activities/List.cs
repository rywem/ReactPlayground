using MediatR;
using System.Collections.Generic;
using System.Threading.Tasks;
using System.Threading;
using Persistence;
using Microsoft.EntityFrameworkCore;
using Domain;

namespace Application.Activities
{
    public class List
    {
        public class Query : IRequest<System.Collections.Generic.List<Activity>>
        {

        }

        public class Handler : IRequestHandler<Query, List<Activity>>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;
            }
            
            public async Task<List<Activity>> Handle(Query request, CancellationToken cancellationToken)
            {
                return await _context.Activities.ToListAsync();
            }
        }
    }
}